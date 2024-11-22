<?php
include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['name'])) {
    try {
        $query = "INSERT INTO categories (name) VALUES (:name)";
        $stmt = $pdo->prepare($query);
        $stmt->execute([
            ':name' => $data['name']
        ]);
        echo json_encode(['message' => 'Category created successfully']);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
