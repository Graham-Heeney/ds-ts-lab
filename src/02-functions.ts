import { friends, colleagues } from './01-basics'
import { Friend, Colleague, EmailContact } from './mytypes'

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
function addInterest(f: Friend, interest: string): void {
  if (f.interests) {
    f.interests.push(interest)
} else {    f.interests = [interest]
  }}addInterest(friends[1], "Art")
console.log(friends[1])

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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

function findFriends(friends: Friend[], criterion: (f: Friend) => boolean): Friend[] {
   const filtered = friends.filter(criterion)
   return filtered
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
