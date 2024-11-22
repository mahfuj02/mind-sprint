<?php
include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['id'])) {
    try {
        $query = "DELETE FROM tutorials WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->execute([':id' => $data['id']]);
        echo json_encode(['message' => 'Tutorial deleted successfully']);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
