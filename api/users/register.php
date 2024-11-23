<?php
include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['name']) && !empty($data['email']) && !empty($data['password'])) {
    try {
        $passwordHash = password_hash($data['password'], PASSWORD_BCRYPT);

        $query = "INSERT INTO users (name, email, password_hash) VALUES (:name, :email, :password_hash)";
        $stmt = $pdo->prepare($query);
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':password_hash' => $passwordHash
        ]);
        echo json_encode(['message' => 'User registered successfully']);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
