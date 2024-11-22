<?php
include '../../config/db.php';

try {
    $query = "SELECT * FROM categories";
    $stmt = $pdo->query($query);
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
