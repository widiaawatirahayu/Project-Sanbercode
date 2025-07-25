describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  
  it('Berhasil login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('admin') // Ganti dengan selector yang sesuai
    cy.get("[name='password']").type('admin123') // Ganti dengan selector yang sesuai
    cy.get("button[type='submit']").click() // Ganti dengan selector yang sesuai
    cy.url().should('include', '/dashboard') // Ganti dengan URL halaman dashboard
  })

 
})