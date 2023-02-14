@foreach( $test as $test_req)
    {{ $test_req->id }} <br>
    {{ $test_req->email }} <br>
    {{ $test_req->name  }} <br>
@endforeach
