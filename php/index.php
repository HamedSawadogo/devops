<?php   
     require_once("./DB.php");
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   
     $connection = new Connection();
    
    ?>

    <h1><?=var_dump($connection) ?></h1>
</body>
</html>