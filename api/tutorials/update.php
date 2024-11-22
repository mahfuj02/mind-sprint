<?php
include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['id']) && (!empty($data['title']) || !empty($data['description']) || !empty($data['price']))) {
    try {
        $query = "UPDATE tutorials SET title = COALESCE(:title, title), description = COALESCE(:description, description), price = COALESCE(:price, price) WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->execute([
            ':id' => $data['id'],
            ':title' => $data['title'] ?? null,
            ':description' => $data['description'] ?? null,
            ':price' => $data['price'] ?? null
        ]);
        echo json_encode(['message' => 'Tutorial updated successfully']);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
