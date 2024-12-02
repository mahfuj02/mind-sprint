<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
   http_response_code(200);
   exit();
}

include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['id'])) {
   try {
       $query = "UPDATE tutorials SET 
                 title = :title,
                 description = :description,
                 price = :price,
                 media_url = :media_url
                 WHERE id = :id";
                 
       $stmt = $pdo->prepare($query);
       $stmt->execute([
           ':id' => $data['id'],
           ':title' => $data['title'],
           ':description' => $data['description'],
           ':price' => $data['price'],
           ':media_url' => $data['media_url'] ?? null
       ]);
       
       echo json_encode(['status' => 'success', 'message' => 'Tutorial updated successfully']);
   } catch (PDOException $e) {
       http_response_code(500);
       echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
   }
} else {
   http_response_code(400);
   echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}