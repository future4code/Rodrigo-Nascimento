const usuarios: user[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type user = {
  name: string,
  email: string,
  role: string

}

function retornaAdmin (admin: user[]):string[] {
  const adminFilter = admin.filter((ad) => {
    return ad.role === "admin"
  })

  const adminMap = adminFilter.map((ad) => {
    return ad.email
  })

  return adminMap

} 

console.log(retornaAdmin(usuarios))
