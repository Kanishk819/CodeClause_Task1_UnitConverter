function convert() {
    var fromValue = parseFloat(document.getElementById('fromUnit').value);
    var fromType = document.getElementById('fromType').value;
    var toType = document.getElementById('toType').value;

    var convertedValue;
    
    // Conversion logic
    if (fromType === 'meter' && toType === 'kilometer') {
      convertedValue = fromValue / 1000;
    } else if (fromType === 'meter' && toType === 'mile') {
      convertedValue = fromValue / 1609.34;
    }else if (fromType === 'meter' && toType === 'centimeter') {
      convertedValue = fromValue * 100;
    }else if (fromType === 'meter' && toType === 'millimeter') {
      convertedValue = fromValue * 1000;
    }

    else if (fromType === 'kilometer' && toType === 'meter') {
      convertedValue = fromValue * 1000;
    } else if (fromType === 'kilometer' && toType === 'mile') {
      convertedValue = fromValue / 1.60934;
    }else if (fromType === 'kilometer' && toType === 'centimeter') {
      convertedValue = fromValue * 100000;
    }else if (fromType === 'kilometer' && toType === 'millimeter') {
      convertedValue = fromValue * 1000000;
    } 
    
    else if (fromType === 'mile' && toType === 'meter') {
      convertedValue = fromValue * 1609.34;
    } else if (fromType === 'mile' && toType === 'kilometer') {
      convertedValue = fromValue * 1.60934;
    } else if (fromType === 'mile' && toType === 'centimeter') {
      convertedValue = fromValue * 160934.4;
    }else if (fromType === 'mile' && toType === 'millimeter') {
      convertedValue = fromValue * 1609344 ;
    } 
    
    else if (fromType === 'centimeter' && toType === 'meter') {
      convertedValue = fromValue / 100;
    } else if (fromType === 'centimeter' && toType === 'kilometer') {
      convertedValue = fromValue / 100000;
    } else if (fromType === 'centimeter' && toType === 'mile') {
      convertedValue = fromValue / 160934.4;
    }else if (fromType === 'centimeter' && toType === 'millimeter') {
      convertedValue = fromValue * 10 ;
    } 

    else if (fromType === 'millimeter' && toType === 'meter') {
      convertedValue = fromValue / 1000;
    } else if (fromType === 'millimeter' && toType === 'kilometer') {
      convertedValue = fromValue / 1000000;
    } else if (fromType === 'millimeter' && toType === 'mile') {
      convertedValue = fromValue / 1609344;
    }else if (fromType === 'millimeter' && toType === 'centimeter') {
      convertedValue = fromValue / 10 ;
    } 

    else {
      convertedValue = fromValue;
    }

    document.getElementById('result').innerHTML = convertedValue.toFixed(5) + ' ' + toType;
  }