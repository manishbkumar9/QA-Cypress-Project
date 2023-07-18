describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1);
   

  })

  it('Verify contact is added when the "Add" button is clicked', () => {
    // Enter contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

    // Assert that the contact is added to the contact list
    cy.get('table tr').should('have.length', 2);
    cy.contains('table td', 'Derek Garr').should('be.visible');
    cy.contains('table td', '1234567890').should('be.visible');
    cy.contains('table td', 'derekgarr@gmail.com').should('be.visible');
  });
  
    it('Verify user can Edit and Update to new contact info(there is a bug)', () => {
      // Add a contact
      cy.get('input[placeholder="Name"]').type('Derek Garr');
      cy.get('input[placeholder="Phone"]').type('123456789');
      cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');
      cy.get('button[name="add"]').click();
  
     // Get the second row of the table and validate its data
    cy.get('table tr').eq(1).within(() => {
      cy.get('td').eq(0).should('contain.text', 'Derek Garr');
      cy.get('td').eq(1).should('contain.text', '123456789');
      cy.get('td').eq(2).should('contain.text', 'derekgarr@gmail.com');
    });

    cy.log('Waiting for 5 seconds...');
   cy.wait(5000);

    cy.get('button[name="edit"]').click();
    cy.get('tr') .eq(1) .find('td') .eq(0) .find('input').clear() .type('Manish Bali'); 
    cy.get('tr') .eq(1) .find('td') .eq(1) .find('input').clear() .type('4376006064'); 
    cy.get('tr') .eq(1) .find('td') .eq(2) .find('input').clear() .type('manishbkumar9@gmail.com'); 
    cy.get('button[name="update"]').click();

     // Assert that the contact is added to the contact list
     cy.get('table tr').should('have.length', 2);
     cy.contains('table td', 'Manish Bali').should('be.visible');
     cy.contains('table td', '4376006064').should('be.visible');
     cy.contains('table td', 'manishbkumar9@gmail.com').should('be.visible');

    cy.log('Waiting for 5 seconds...');
    cy.wait(5000);
     });
    
  
    
  
    it('Verify contact is deleted when the "Delete" button is clicked', () => {
      // Add a contact
      cy.get('input[placeholder="Name"]').type('Derek Garr');
      cy.get('input[placeholder="Phone"]').type('123456789');
      cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');
      cy.get('button[name="add"]').click();
  
     // Get the second row of the table and validate its data
    cy.get('table tr').eq(1).within(() => {
      cy.get('td').eq(0).should('contain.text', 'Derek Garr');
      cy.get('td').eq(1).should('contain.text', '123456789');
      cy.get('td').eq(2).should('contain.text', 'derekgarr@gmail.com');
    });

    cy.get('button[name="delete"]').click();
    });
  

  it('Verify user can add 2 contacts ', () => {
    // Enter first contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

     // Enter second contact details
     cy.get('input[placeholder="Name"]').type('Peter Doe');
     cy.get('input[placeholder="Phone"]').type('987654321');
     cy.get('input[placeholder="Email"]').type('peterdoe@example.com');
 
     // Click the "Add" button
     cy.get('button[name="add"]').click();

    // Assert that the contact is added to the contact list
    cy.get('table tr').should('have.length', 3);
    cy.contains('table td', 'Derek Garr').should('be.visible');
    cy.contains('table td', '1234567890').should('be.visible');
    cy.contains('table td', 'derekgarr@gmail.com').should('be.visible');
    cy.contains('table td', 'Peter Doe').should('be.visible');
    cy.contains('table td', '987654321').should('be.visible');
    cy.contains('table td', 'peterdoe@example.com').should('be.visible');
  });

  it('Verify user can delete 1st contact from list ', () => {
    // Enter first contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

     // Enter second contact details
     cy.get('input[placeholder="Name"]').type('Peter Doe');
     cy.get('input[placeholder="Phone"]').type('987654321');
     cy.get('input[placeholder="Email"]').type('peterdoe@example.com');
 
     // Click the "Add" button
     cy.get('button[name="add"]').click();

     cy.get('button[name="delete"').eq(0).click();

  })

  it('Verify user can delete 2nd contact from list ', () => {
    // Enter first contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

     // Enter second contact details
     cy.get('input[placeholder="Name"]').type('Peter Doe');
     cy.get('input[placeholder="Phone"]').type('987654321');
     cy.get('input[placeholder="Email"]').type('peterdoe@example.com');
 
     // Click the "Add" button
     cy.get('button[name="add"]').click();

     cy.get('button[name="delete"').eq(1).click();

  })

  it('Verify user can add contact with Name and Phone fields only', () => {
    // Enter contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Phone"]').type('1234567890');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

    // Assert that the contact is added to the contact list
    cy.get('table tr').should('have.length', 2);
    cy.contains('table td', 'Derek Garr').should('be.visible');
    cy.contains('table td', '1234567890').should('be.visible');
  });

  it('Verify user can add contact with Name and email fields only', () => {
    // Enter contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

    // Assert that the contact is added to the contact list
    cy.get('table tr').should('have.length', 2);
    cy.contains('table td', 'Derek Garr').should('be.visible');
    cy.contains('table td', 'derekgarr@gmail.com').should('be.visible');
  });

  it('Verify user adds a contact details without phone number and can edit and update a number', () => {
    // Add a contact
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');
    cy.get('button[name="add"]').click();

   // Get the second row of the table and validate its data
  cy.get('table tr').eq(1).within(() => {
    cy.get('td').eq(0).should('contain.text', 'Derek Garr');
    cy.get('td').eq(2).should('contain.text', 'derekgarr@gmail.com');
  });
  cy.get('button[name="edit"]').click();

   
   cy.log('Waiting for 5 seconds...');
   cy.wait(5000);


  cy.get('tr') 
  .eq(1)
  .find('td') 
  .eq(1) 
  .find('input') 
  .type('1234567890'); 

  
  cy.get('button[name="update"]').click();
  
  cy.get('table tr').eq(1).within(() => {
    cy.get('td').eq(0).should('contain.text', 'Derek Garr');
    cy.get('td').eq(1).should('contain.text', '123456789');
    cy.get('td').eq(2).should('contain.text', 'derekgarr@gmail.com');

    cy.log('Waiting for 5 seconds...');
    cy.wait(5000);
  });

   });


   it('Verify user can Edit and Update from second contact from list (there is a bug)', () => {
    // Enter first contact details
    cy.get('input[placeholder="Name"]').type('Derek Garr');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('derekgarr@gmail.com');

    // Click the "Add" button
    cy.get('button[name="add"]').click();

     // Enter second contact details
     cy.get('input[placeholder="Name"]').type('Peter Doe');
     cy.get('input[placeholder="Phone"]').type('987654321');
     cy.get('input[placeholder="Email"]').type('peterdoe@example.com');
 
     // Click the "Add" button
     cy.get('button[name="add"]').click();

  cy.log('Waiting for 5 seconds...');
 cy.wait(5000);

  cy.get('button[name="edit"]').eq(1).click();
  cy.get('tr') .eq(2) .find('td') .eq(0) .find('input').clear() .type('Manish Bali'); 
  cy.get('tr') .eq(2) .find('td') .eq(1) .find('input').clear() .type('4376006064'); 
  cy.get('tr') .eq(2) .find('td') .eq(2) .find('input').clear() .type('manishbkumar9@gmail.com'); 
  cy.get('button[name="update"]').click();

   // Assert that the contact is added to the contact list
   cy.get('table tr').should('have.length', 3);
   cy.contains('table td', 'Manish Bali').should('be.visible');
   cy.contains('table td', '4376006064').should('be.visible');
   cy.contains('table td', 'manishbkumar9@gmail.com').should('be.visible');

  cy.log('Waiting for 5 seconds...');
  cy.wait(5000);
   });
  

});
  