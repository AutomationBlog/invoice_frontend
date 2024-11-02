export default function authUser() {
  if (localStorage.getItem("token")) return true;
  else return false;
}
