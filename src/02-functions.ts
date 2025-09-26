import { friends, colleagues } from './01-basics'
import { Friend, Colleague } from './mytypes'

function older(f: Friend): string {
  f.age += 1
  return `${f.name} is now ${f.age}`
}
console.log(older(friends[0]))

function oolder(friends: Friend[]): string[] {
  const s: string[] = []
  for (const f of friends) {
    f.age += 1
    s.push(`${f.name} is ${f.age}`)
  }
  return s
}
console.log(oolder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  return cs.reduce((max, curr) =>
    curr.contact.extension > max.contact.extension ? curr : max
  )
}
console.log(highestExtension(colleagues.current))

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  const highest = highestExtension(cs).contact.extension
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: highest + 1,
    },
  }
  cs.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com")
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"))
