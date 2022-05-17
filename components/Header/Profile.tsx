export function Profile() {
  return (
    <div className="flex ml-8 items-center">
      <div className="mr-4 text-right">
        <p className="hidden">Eric Macedo</p>
        <p className="text-gray-300 text-sm hidden {breakpoint}">
          ericthr42@gmail.com
        </p>
      </div>
      <img
        className="inline-block rounded-full max-w-none h-12 mr-3 md:mr-0"
        src="http://github.com/ericDK89.png"
        alt="Perfil"
      />
    </div>
  );
}
