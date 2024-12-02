<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include '../../config/db.php';

try {
    $query = "SELECT * FROM tutorials";
    $stmt = $pdo->query($query);
    $tutorials = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    
    if($tutorials) {
        http_response_code(200);
        echo json_encode([
            'status' => 'success',
            'data' => $tutorials
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            'status' => 'error',
            'message' => 'No tutorials found'
        ]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database Error',
        'error' => $e->getMessage()
    ]);
}
?>