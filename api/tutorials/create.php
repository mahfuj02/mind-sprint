<?php
include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['title']) && !empty($data['description']) && !empty($data['price'])) {
    try {
        $query = "INSERT INTO tutorials (title, description, price, published_at) VALUES (:title, :description, :price, NOW())";
        $stmt = $pdo->prepare($query);
        $stmt->execute([
            ':title' => $data['title'],
            ':description' => $data['description'],
            ':price' => $data['price']
        ]);
        echo json_encode(['message' => 'Tutorial created successfully']);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
