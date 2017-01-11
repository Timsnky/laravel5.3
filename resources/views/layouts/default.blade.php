<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>CRE System</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('layouts.partials.imports')
</head>
<body>

<div id="cres" class="off-canvas-wrapper-inner" data-off-canvas-wrapper>

    @include('layouts.partials.sidebar')

    <div class="off-canvas-content" data-off-canvas-content>

        @include('layouts.partials.topbar')

        <div class="row">
            <div class="medium-12 columns">
                @yield('content')
            </div>
        </div>
    </div>
</div>

{!! Html::script('/assets/js/cres.min.js') !!}

<script>
    $(document).foundation();
</script>

</body>
</html>





