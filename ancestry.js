const ANCESTRY_FILE = [
  {'name': 'Carolus Haverbeke', 'sex': 'm', 'born': 1832, 'died': 1905, 'father': 'Carel Haverbeke', 'mother': 'Maria van Brussel'},
  {'name': 'Emma de Milliano', 'sex': 'f', 'born': 1876, 'died': 1956, 'father': 'Petrus de Milliano', 'mother': 'Sophia van Damme'},
  {'name': 'Maria de Rycke', 'sex': 'f', 'born': 1683, 'died': 1724, 'father': 'Frederik de Rycke', 'mother': 'Laurentia van Vlaenderen'},
  {'name': 'Jan van Brussel', 'sex': 'm', 'born': 1714, 'died': 1748, 'father': 'Jacobus van Brussel', 'mother': 'Joanna van Rooten'},
  {'name': 'Philibert Haverbeke', 'sex': 'm', 'born': 1907, 'died': 1997, 'father': 'Emile Haverbeke', 'mother': 'Emma de Milliano'},
  {'name': 'Jan Frans van Brussel', 'sex': 'm', 'born': 1761, 'died': 1833, 'father': 'Jacobus Bernardus van Brussel', 'mother':null},
  {'name': 'Pauwels van Haverbeke', 'sex': 'm', 'born': 1535, 'died': 1582, 'father': 'N. van Haverbeke', 'mother':null},
  {'name': 'Clara Aernoudts', 'sex': 'f', 'born': 1918, 'died': 2012, 'father': 'Henry Aernoudts', 'mother': 'Sidonie Coene'},
  {'name': 'Emile Haverbeke', 'sex': 'm', 'born': 1877, 'died': 1968, 'father': 'Carolus Haverbeke', 'mother': 'Maria Sturm'},
  {'name': 'Lieven de Causmaecker', 'sex': 'm', 'born': 1696, 'died': 1724, 'father': 'Carel de Causmaecker', 'mother': 'Joanna Claes'},
  {'name': 'Pieter Haverbeke', 'sex': 'm', 'born': 1602, 'died': 1642, 'father': 'Lieven van Haverbeke', 'mother':null},
  {'name': 'Livina Haverbeke', 'sex': 'f', 'born': 1692, 'died': 1743, 'father': 'Daniel Haverbeke', 'mother': 'Joanna de Pape'},
  {'name': 'Pieter Bernard Haverbeke', 'sex': 'm', 'born': 1695, 'died': 1762, 'father': 'Willem Haverbeke', 'mother': 'Petronella Wauters'},
  {'name': 'Lieven van Haverbeke', 'sex': 'm', 'born': 1570, 'died': 1636, 'father': 'Pauwels van Haverbeke', 'mother': 'Lievijne Jans'},
  {'name': 'Joanna de Causmaecker', 'sex': 'f', 'born': 1762, 'died': 1807, 'father': 'Bernardus de Causmaecker', 'mother':null},
  {'name': 'Willem Haverbeke', 'sex': 'm', 'born': 1668, 'died': 1731, 'father': 'Lieven Haverbeke', 'mother': 'Elisabeth Hercke'},
  {'name': 'Pieter Antone Haverbeke', 'sex': 'm', 'born': 1753, 'died': 1798, 'father': 'Jan Francies Haverbeke', 'mother': 'Petronella de Decker'},
  {'name': 'Maria van Brussel', 'sex': 'f', 'born': 1801, 'died': 1834, 'father': 'Jan Frans van Brussel', 'mother': 'Joanna de Causmaecker'},
  {'name': 'Angela Haverbeke', 'sex': 'f', 'born': 1728, 'died': 1734, 'father': 'Pieter Bernard Haverbeke', 'mother': 'Livina de Vrieze'},
  {'name': 'Elisabeth Haverbeke', 'sex': 'f', 'born': 1711, 'died': 1754, 'father': 'Jan Haverbeke', 'mother': 'Maria de Rycke'},
  {'name': 'Lievijne Jans', 'sex': 'f', 'born': 1542, 'died': 1582, 'father':null, 'mother':null},
  {'name': 'Bernardus de Causmaecker', 'sex': 'm', 'born': 1721, 'died': 1789, 'father': 'Lieven de Causmaecker', 'mother': 'Livina Haverbeke'},
  {'name': 'Jacoba Lammens', 'sex': 'f', 'born': 1699, 'died': 1740, 'father': 'Lieven Lammens', 'mother': 'Livina de Vrieze'},
  {'name': 'Pieter de Decker', 'sex': 'm', 'born': 1705, 'died': 1780, 'father': 'Joos de Decker', 'mother': 'Petronella van de Steene'},
  {'name': 'Joanna de Pape', 'sex': 'f', 'born': 1654, 'died': 1723, 'father': 'Vincent de Pape', 'mother': 'Petronella Wauters'},
  {'name': 'Daniel Haverbeke', 'sex': 'm', 'born': 1652, 'died': 1723, 'father': 'Lieven Haverbeke', 'mother': 'Elisabeth Hercke'},
  {'name': 'Lieven Haverbeke', 'sex': 'm', 'born': 1631, 'died': 1676, 'father': 'Pieter Haverbeke', 'mother': 'Anna van Hecke'},
  {'name': 'Martina de Pape', 'sex': 'f', 'born': 1666, 'died': 1727, 'father': 'Vincent de Pape', 'mother': 'Petronella Wauters'},
  {'name': 'Jan Francies Haverbeke', 'sex': 'm', 'born': 1725, 'died': 1779, 'father': 'Pieter Bernard Haverbeke', 'mother': 'Livina de Vrieze'},
  {'name': 'Maria Haverbeke', 'sex': 'm', 'born': 1905, 'died': 1997, 'father': 'Emile Haverbeke', 'mother': 'Emma de Milliano'},
  {'name': 'Petronella de Decker', 'sex': 'f', 'born': 1731, 'died': 1781, 'father': 'Pieter de Decker', 'mother': 'Livina Haverbeke'},
  {'name': 'Livina Sierens', 'sex': 'f', 'born': 1761, 'died': 1826, 'father': 'Jan Sierens', 'mother': 'Maria van Waes'},
  {'name': 'Laurentia Haverbeke', 'sex': 'f', 'born': 1710, 'died': 1786, 'father': 'Jan Haverbeke', 'mother': 'Maria de Rycke'},
  {'name': 'Carel Haverbeke', 'sex': 'm', 'born': 1796, 'died': 1837, 'father': 'Pieter Antone Haverbeke', 'mother': 'Livina Sierens'},
  {'name': 'Elisabeth Hercke', 'sex': 'f', 'born': 1632, 'died': 1674, 'father': 'Willem Hercke', 'mother': 'Margriet de Brabander'},
  {'name': 'Jan Haverbeke', 'sex': 'm', 'born': 1671, 'died': 1731, 'father': 'Lieven Haverbeke', 'mother': 'Elisabeth Hercke'},
  {'name': 'Anna van Hecke', 'sex': 'f', 'born': 1607, 'died': 1670, 'father': 'Paschasius van Hecke', 'mother': 'Martijntken Beelaert'},
  {'name': 'Maria Sturm', 'sex': 'f', 'born': 1835, 'died': 1917, 'father': 'Charles Sturm', 'mother': 'Seraphina Spelier'},
  {'name': 'Jacobus Bernardus van Brussel', 'sex': 'm', 'born': 1736, 'died': 1809, 'father': 'Jan van Brussel', 'mother': 'Elisabeth Haverbeke'}
];

createCardList(ANCESTRY_FILE);

function createCardList(arr) {
  var array = [],
   averageFemaleLife = 0,
   femaleCount = 0,
   averageMaleLife = 0,
   maleCount = 0,
   average = 0,
   averageCount = 0,
   current,
   div,
   name,
   sex,
   born,
   father,
   mother,   
   bornAverage,
   maleLife,
   femaleLife;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['sex'] === 'f') {
      averageFemaleLife += arr[i]['died'] - arr[i]['born'];
      femaleCount++;

      for (var j = 0; j < arr.length; j++) {
        if (arr[i]['name'] === arr[j]['mother']) {
          console.log(arr[j]['born'] - arr[i]['born'] + arr[j]['name']);
          current = +arr[j]['born'] - +arr[i]['born'];
          if (current > 0) {
            average += current;
            averageCount++;
          }
        }
      }
    } else {
      averageMaleLife += arr[i]['died'] - arr[i]['born'];
      maleCount++;
    }

    div = document.createElement('div');
    div.style.width = '180px';
    div.style.height = '250px';
    div.style.display = 'inline-block';
    div.style.verticalAlign = 'top';
    div.style.textAlign = 'center';
    div.style.margin = '18px';
    div.style.padding = '15px';
    div.style.backgroundColor = '#f2f2f2';
    div.style.color = '#996600';
    div.style.fontFamily = '"Averia Libre", cursive';
    div.style.border = 'solid 2px #996600';
    div.style.boxShadow = '0px 0px 16px 6px rgba(0,0,0,0.50)';

    name = div.appendChild(document.createElement('h3'));
    name.innerHTML = arr[i]['name'];

    sex = div.appendChild(document.createElement('h4'));

    if (arr[i]['sex'] === 'f') {
      sex.innerHTML = 'Female';
    } else if (arr[i]['sex'] === 'm') {
      sex.innerHTML = 'Male';
    }

    born = div.appendChild(document.createElement('p'));
    born.innerHTML = '( ' + arr[i]['born'] + ' - ' + arr[i]['died'] + ' )';

    if (arr[i]['father']) {
      father = div.appendChild(document.createElement('h5'));
      father.innerHTML = 'Father: ' + arr[i]['father'];
    }

    if (arr[i]['mother']) {
      mother = div.appendChild(document.createElement('h5'));
      mother.innerHTML = 'Mother: ' + arr[i]['mother'];
    }    
    
    document.body.appendChild(div);
  }

  div = document.createElement('div');
  div.style.width = '450px';
  div.style.display = 'block';
  div.style.verticalAlign = 'top';
  div.style.textAlign = 'center';
  div.style.margin = '45px auto';
  div.style.padding = '15px';
  div.style.backgroundColor = '#f2f2f2';
  div.style.color = '#996600';
  div.style.fontFamily = '"Averia Libre", cursive';
  div.style.border = 'solid 2px #996600';
  div.style.boxShadow = '0px 0px 26px 6px rgba(0,0,0,0.50)';

  name = div.appendChild(document.createElement('h2'));
  name.innerHTML = 'Statistical analysis';

  bornAverage = div.appendChild(document.createElement('h5'));  
  if (averageCount < 1) {
    bornAverage.innerHTML = 'Not specified';
  } else {    
    bornAverage.innerHTML = 'Difference in age: ' + Math.floor(average / averageCount);
  }  

  maleLife = div.appendChild(document.createElement('h5'));
  maleLife.innerHTML = 'Average male life: ' + Math.floor(averageMaleLife / maleCount);

  femaleLife = div.appendChild(document.createElement('h5'));
  femaleLife.innerHTML = 'Average female life: ' + Math.floor(averageFemaleLife / femaleCount);

  document.body.appendChild(div);
}

