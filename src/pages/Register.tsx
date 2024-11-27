import RegisterForm from '../components/authantication/RegisterForm'
interface Props{
    isDarkMode: boolean;
}
const Register = ({isDarkMode}: Props) => {

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      isDarkMode ? "bg-darkMainBg" : "bg-lightMainBg"
    }`}>
      <div className="w-full px-6 py-12">
        <RegisterForm isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Register;