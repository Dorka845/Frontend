function $(id){
    return document.getElementById(id);
}

function rangeRGB(){    
    const r = $('red-range').value; //document.getElementById('red-range').value;
    const g = $('green-range').value;
    const b = $('blue-range').value;
    const a = $('alpha-range').value;

    $('red-value').value = r;
    $('green-value').value = g;
    $('blue-value').value = b;
    $('alpha-value').value = a;

    document.getElementById('rgb-box').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function valueRGB(){    
    const r = $('red-value').value;
    const g = $('green-value').value;
    const b = $('blue-value').value;
    const a = $('alpha-value').value;

    $('red-range').value = r;
    $('green-range').value = g;
    $('blue-range').value = b;
    $('alpha-range').value = a;

    document.getElementById('rgb-box').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

$('red-range').addEventListener('input', rangeRGB);
$('green-range').addEventListener('input', rangeRGB);
$('blue-range').addEventListener('input', rangeRGB);
$('alpha-range').addEventListener('input', rangeRGB);

$('red-value').addEventListener('input', valueRGB);
$('green-value').addEventListener('input', valueRGB);
$('blue-value').addEventListener('input', valueRGB);
$('alpha-value').addEventListener('input', valueRGB);