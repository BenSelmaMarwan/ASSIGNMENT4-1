document.addEventListener('DOMContentLoaded', () => {
    const createMemberForm = document.getElementById('createMemberForm');
    const updateMemberForm = document.getElementById('updateMemberForm');
    const deleteMemberForm = document.getElementById('deleteMemberForm');
    const searchMemberForm = document.getElementById('searchMemberForm');
    const memberIdToUpdate = document.getElementById('memberIdToUpdate');
    const updatedFirstName = document.getElementById('updatedFirstName');
    const updatedLastName = document.getElementById('updatedLastName');
    const updatedEmail = document.getElementById('updatedEmail');
    const updatedJoinDate = document.getElementById('updatedJoinDate');
    const memberIdToDelete = document.getElementById('memberIdToDelete');
    const emailToSearch = document.getElementById('emailToSearch');
    const memberList = document.getElementById('memberList');

    // Event listener for creating a new member
    createMemberForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extract member data from the form inputs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const joinDate = document.getElementById('joinDate').value;

        // Send a POST request to create a new member
        try {
            const response = await fetch('/members', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    join_date: joinDate,
                }),
            });

            if (response.ok) {
                const newMember = await response.json();
                // Display the newly created member in the list
                createMemberForm.reset();
            } else {
                console.error('Failed to create a new member.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Update endpoint for members
    updateMemberForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extract member data from the form inputs
        const memberId = memberIdToUpdate.value;
        const firstName = updatedFirstName.value;
        const lastName = updatedLastName.value;
        const email = updatedEmail.value;
        const joinDate = updatedJoinDate.value;

        // Send a PUT request to update an existing member
        try {
            const response = await fetch(`/members/${memberId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    join_date: joinDate,
                }),
            });

            if (response.ok) {
                console.log(`Member with ID ${memberId} updated successfully!`);
                updateMemberForm.reset();
            } else {
                console.log('Failed to update the member.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    });

    // Delete endpoint for members
    deleteMemberForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extract member ID to delete from the form input
        const memberId = memberIdToDelete.value;

        // Send a DELETE request to delete the member
        try {
            const response = await fetch(`/members/${memberId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Member with ID ${memberId} deleted successfully!`);
                deleteMemberForm.reset();
            } else {
                console.log('Failed to delete the member.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Search endpoint for members by email
    searchMemberForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extract email to search from the form input
        const email = emailToSearch.value;

        // Send a GET request to search members by email
        try {
            const response = await fetch(`/members?email=${encodeURIComponent(email)}`);

            if (response.ok) {
                // If the response is OK, convert the response to JSON
                const members = await response.json();

                // Display the search results in a list
                memberList.innerHTML = ''; // Clear the previous list (if any)

                members.forEach((member) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${member.first_name} ${member.last_name} (${member.email})`;
                    memberList.appendChild(listItem);
                });
            } else {
                console.error('Failed to retrieve members by email.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
