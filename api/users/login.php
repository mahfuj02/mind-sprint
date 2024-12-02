<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['email']) && !empty($data['password'])) {
    try {
        $query = "SELECT * FROM users WHERE email = :email";
        $stmt = $pdo->prepare($query);
        $stmt->execute([':email' => $data['email']]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($data['password'], $user['password_hash'])) {
            unset($user['password_hash']); // Don't send password hash
            echo json_encode([
                'status' => 'success',
                'data' => $user
            ]);
        } else {
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $e->getMessage()
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Email and password are required'
    ]);
}
?>