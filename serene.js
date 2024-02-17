function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var container = document.querySelector('.container');
  
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
    container.style.marginLeft = container.style.marginLeft === '250px' ? '0px' : '250px';
  }

