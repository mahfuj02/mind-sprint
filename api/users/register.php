<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

// register.php - Update response format
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
        
        echo json_encode([
            'status' => 'success',
            'message' => 'User registered successfully',
            'data' => [
                'name' => $data['name'],
                'email' => $data['email']
            ]
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Registration failed',
            'error' => $e->getMessage()
        ]);
    }
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
