 let currentProjectId = null;
   
 function goToMainPage() {
    console.log('Navigating to main page...');
    window.location.replace("../../../init/main/index.html");
  }

        document.querySelectorAll('.project_card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('btn_delete')) {
                    const projectId = this.getAttribute('data-id');
                    const title = this.querySelector('.card_header h3').textContent;
                    const description = this.querySelector('.card_description').textContent;
                    
                    openEditModal(projectId, title, description);
                }
            });
        });

        function openEditModal(projectId, title, description) {
            currentProjectId = projectId;
            document.getElementById('edit_project_name').value = title;
            document.getElementById('edit_description').value = description;
            document.getElementById('editModal').classList.add('show');
        }

        function closeEditModal() {
            document.getElementById('editModal').classList.remove('show');
            currentProjectId = null;
        }
        document.getElementById('editForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const projectName = document.getElementById('edit_project_name').value;
            const mount = document.getElementById('edit_project_mount').value;
            const category = document.getElementById('edit_category').value;
            const description = document.getElementById('edit_description').value;
            
            console.log('Saving project:', {
                id: currentProjectId,
                name: projectName,
                mount: mount,
                category: category,
                description: description
            });
            const card = document.querySelector(`[data-id="${currentProjectId}"]`);
            if (card) {
                card.querySelector('.card_header h3').textContent = projectName;
                card.querySelector('.card_description').textContent = description;
            }
            
            closeEditModal();
            alert('Project updated successfully!');
        });

        function showConfirmModal(title, message, onConfirm) {
            document.getElementById('confirmTitle').textContent = title;
            document.getElementById('confirmMessage').textContent = message;
            document.getElementById('confirmModal').classList.add('show');
            
            const yesBtn = document.getElementById('confirmYesBtn');
            yesBtn.onclick = function() {
                closeConfirmModal();
                onConfirm();
            };
        }

        function closeConfirmModal() {
            document.getElementById('confirmModal').classList.remove('show');
        }

        function confirmDelete(event, projectId) {
            event.stopPropagation();
            showConfirmModal(
                'Delete Project',
                'Are you sure you want to delete this project? This action cannot be undone.');
        }

        function confirmCancel() {
            showConfirmModal(
                'Cancel Changes',
                'Are you sure you want to cancel? All unsaved changes will be lost.',
                () => {
                    console.log('Changes cancelled');
                    window.location.reload();
                }
            );
        }

        function confirmApplyChanges() {
            showConfirmModal(
                'Apply Changes',
                'Are you sure you want to apply all changes? This will save all modifications.',
                () => {
                    console.log('Changes applied');
                    alert('All changes have been saved successfully!');
                }
            );
        }
        window.onclick = function(event) {
            const editModal = document.getElementById('editModal');
            const confirmModal = document.getElementById('confirmModal');
            
            if (event.target === editModal) {
                closeEditModal();
            }
            if (event.target === confirmModal) {
                closeConfirmModal();
            }
        }

