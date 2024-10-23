const Welcome = () => {
    return (
        <section className="bg-gray-300 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex justify-center items-center min-h-screen">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">My SoftSkill And HardSkill</h2>
            <br></br>
            

<div className="relative overflow-x-auto shadow-2xl sm:rounded-lg text-center">
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase dark:text-gray-800">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-600 dark:bg-gray-400">
                    SoftSkill
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-600 dark:bg-gray-400">
                    HardSkill
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-400 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    Adapt
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    English
                </td>
            </tr>
            <tr className="border-b border-gray-400 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    Teamwork
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    Public Speaker
                </td>
            </tr>
            <tr className="border-b border-gray-400 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    Fast learner
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    HTML
                </td>
            </tr>
            <tr className="border-b border-gray-400 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
               Comunication
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    CSS
                </td>
            </tr>
            <tr className="border-b border-gray-400 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    Basic PHP
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    Basic JS
                </td>
            </tr>
        </tbody>
    </table>
</div>

          </div>
        </div>
      </section>
    );
}

export  default Welcome;