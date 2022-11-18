<html>
<head>
</head>
<body>
	@foreach ($test as $user)
  {{ $user->name }}  {{ $user->email }}  {{ $user->id }} <br>
  @endforeach
</body>
</html>
