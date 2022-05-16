export function Profile() {
  return (
    <div className="flex ml-8 items-center">
      <div className="mr-4 text-right">
        <p>Eric Macedo</p>
        <p className="text-gray-300 text-sm">ericthr42@gmail.com</p>
      </div>
      <img
        className="inline-block h-12 w-12 rounded-full"
        src="http://github.com/ericDK89.png"
        alt="Perfil"
      />
    </div>
  );
}
