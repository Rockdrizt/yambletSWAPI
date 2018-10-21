<!DOCTYPE html>
<html>
<body>

Name : <?php echo htmlspecialchars($_POST['name']); ?> <br>
Passengers : <?php echo (int)$_POST['passengers']; ?> <br>
Cargo Capacity : <?php echo (int)$_POST['capacity']; ?> <br>

</body>
</html>