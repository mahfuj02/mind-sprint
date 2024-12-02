<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
   http_response_code(200);
   exit();
}

include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['title']) && !empty($data['description']) && !empty($data['price'])) {
   try {
       $stmt = $pdo->prepare("INSERT INTO tutorials 
           (title, description, price, published_at, media_url, category_id) 
           VALUES (:title, :description, :price, NOW(), :media_url, :category_id)");
       
       $stmt->execute([
           ':title' => $data['title'],
           ':description' => $data['description'],
           ':price' => $data['price'],
           ':media_url' => $data['media_url'] ?? null,
           ':category_id' => $data['category_id'] ?? null
       ]);
       
       echo json_encode(['status' => 'success', 'message' => 'Tutorial created successfully']);
   } catch (PDOException $e) {
       error_log("Database error: " . $e->getMessage());
       http_response_code(500);
       echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
   }
} else {
   http_response_code(400);
   echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}
?>