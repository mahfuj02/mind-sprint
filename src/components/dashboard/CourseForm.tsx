// components/admin/CourseForm.tsx
import React, { useState, useEffect } from 'react';
import { Course } from '../../types/course.types';
import courseService from '../../services/courseService';

interface CourseFormProps {
 onClose: () => void;
 initialData?: Course | null;
 isDarkMode: boolean;
}

interface CourseFormData {
  title: string;
  description: string;
  price: string; // string for form input
  media_url: string;
  category_id: string; // string for form input
}

const CourseForm: React.FC<CourseFormProps> = ({
 onClose,
 initialData,
 isDarkMode
}) => {
 const [formData, setFormData] = useState<CourseFormData>({
   title: '',
   description: '',
   price: '',
   media_url: '',
   category_id: ''
 });
 const [isSubmitting, setIsSubmitting] = useState(false);

 useEffect(() => {
   if (initialData) {
     setFormData({
       title: initialData.title,
       description: initialData.description,
       price: initialData.price.toString(),
       media_url: initialData.media_url || '',
       category_id: initialData.category_id?.toString() || ''
     });
   }
 }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
     let response;
    const courseData = {
     title: formData.title,
     description: formData.description,
     price: Number(formData.price), // Convert to number
     media_url: formData.media_url,
     category_id: formData.category_id ? Number(formData.category_id) : null // Convert to number if exists
    }

     if (initialData?.id) {
        response = await courseService.updateCourse(initialData.id, courseData);
      } else {
        response = await courseService.createCourse(courseData);
      } 
      
      if (response.status === 'success') {
        window.location.href = window.location.href;
      }
    } catch (error) {
      console.error('Failed to create course:', error);
      setIsSubmitting(false);
    }
  };
  
  
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`w-full max-w-md p-6 rounded-lg ${
        isDarkMode ? 'bg-darkHeaderFooter' : 'bg-white'
      }`}>
        <h2 className={`text-xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {initialData ? 'Edit Course' : 'Add New Course'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
              rows={3}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div> */}

          <div>
           <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
             Image URL
           </label>
           <input
             type="text"
             name="media_url"
             value={formData.media_url}
             onChange={handleChange}
             className="w-full p-2 border rounded-lg"
             placeholder="Enter image URL"
           />
         </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              disabled={isSubmitting} // Disable while submitting

            >
              {initialData ? 'Update' : isSubmitting? 'Creating': 'Create'} Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

  export default CourseForm;