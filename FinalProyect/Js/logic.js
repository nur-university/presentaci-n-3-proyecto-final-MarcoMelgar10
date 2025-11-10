document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('principal_menu');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');
  const overlay = document.createElement('div');
  let currentView = 'guest'; 
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      sidebar.classList.add('active');  
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSidebar();
    });
  }

  overlay.addEventListener('click', () => {
    closeSidebar();
  });

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openPostDetail = function(projectId) {
    if (currentView == 'guest'){
        return;
    }
    console.log('Opening project:', projectId);
    const modal = document.getElementById('postModal');
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  window.closePostDetail = function() {
    const modal = document.getElementById('postModal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  window.goToDonation = function() {
    console.log('Redirecting to donation page...');
    alert('Redirecting to donation page...');
    window.location.replace("../main/donateProject/index.html");
  }

  document.addEventListener('click', function(event) {
    const modal = document.getElementById('postModal');
    if (modal && modal.classList.contains('show') && event.target === modal) {
      window.closePostDetail();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      window.closePostDetail();
      closeSidebar();
    }
  });


  window.changeView = function(view) {
    currentView = view;
    const imageUser = document.getElementById('image_header');
    const loginButton = document.getElementById('login_button');
    const loginIcon = document.getElementById('login_icon');
    const iconMenu = document.getElementById('icon_menu');
    const menuList = document.querySelector('.menu-list');
    const adminSections = document.querySelectorAll('.admin_section');
    const guestBtn = document.getElementById('button_guest_view');
    const userBtn = document.getElementById('button_user_view');
    const adminBtn = document.getElementById('button_admin_view');
    const allHiddenElements = document.querySelectorAll('.hidden');

    closeSidebar();

    if (guestBtn) guestBtn.classList.remove('active');
    if (userBtn) userBtn.classList.remove('active');
    if (adminBtn) adminBtn.classList.remove('active');
    if (imageUser) imageUser.classList.remove('visible');
    if (menuBtn) menuBtn.classList.remove('visible');
    if (iconMenu) iconMenu.classList.remove('visible');
    if (sidebar) sidebar.classList.remove('visible');
    if (closeBtn) closeBtn.classList.remove('visible');
    if (menuList) menuList.classList.remove('visible');    
    if (loginButton) loginButton.classList.remove('hidden');
    if (loginIcon) loginIcon.classList.remove('hidden');

    adminSections.forEach(section => {
      section.classList.remove('visible');
    });
    allHiddenElements.forEach(element => {
      if (element.id !== 'sidebar' && 
          element.id !== 'close-btn' && 
          !element.classList.contains('menu-list') &&
          element.id !== 'principal_menu' &&
          element.id !== 'icon_menu') {
        element.classList.remove('visible');
      }
    });

    switch(view) {
      case 'guest':
        if (guestBtn) guestBtn.classList.add('active');
        console.log('Vista: Guest');
        break;

      case 'user':
        if (userBtn) userBtn.classList.add('active');
        if (imageUser) imageUser.classList.add('visible');
        if (menuBtn) menuBtn.classList.add('visible');
        if (iconMenu) iconMenu.classList.add('visible');
        if (sidebar) sidebar.classList.add('visible');
        if (closeBtn) closeBtn.classList.add('visible');
        if (menuList) menuList.classList.add('visible');
        if (loginButton) loginButton.classList.add('hidden');
        if (loginIcon) loginIcon.classList.add('hidden');
        
        allHiddenElements.forEach(element => {
          if (element.id !== 'sidebar' && 
              element.id !== 'close-btn' && 
              !element.classList.contains('menu-list') &&
              element.id !== 'principal_menu' &&
              element.id !== 'icon_menu') {
            element.classList.add('visible');
          }
        });
        
        console.log('Vista: User');
        break;

      case 'admin':
        if (adminBtn) adminBtn.classList.add('active');
        if (imageUser) imageUser.classList.add('visible');
        if (menuBtn) menuBtn.classList.add('visible');
        if (iconMenu) iconMenu.classList.add('visible');
        if (sidebar) sidebar.classList.add('visible');
        if (closeBtn) closeBtn.classList.add('visible');
        if (menuList) menuList.classList.add('visible');
        if (loginButton) loginButton.classList.add('hidden');
        if (loginIcon) loginIcon.classList.add('hidden');
        adminSections.forEach(section => {
          section.classList.add('visible');
        });
        
        allHiddenElements.forEach(element => {
          if (element.id !== 'sidebar' && 
              element.id !== 'close-btn' && 
              !element.classList.contains('menu-list') &&
              element.id !== 'principal_menu' &&
              element.id !== 'icon_menu') {
            element.classList.add('visible');
          }
        });
        
        console.log('Vista: Admin');
        break;
    }
  }

  
  window.changeView('guest');

});


function addFavorite(element){
  if (element.classList.contains('active')){
    element.classList.remove('active');
  }else{
    element.classList.add('active');
  }

}
