import Link from "next/link";

export default async function PostsMain() {
  const resp = await fetch(
    "https://my-json-server.typicode.com/Krzysztofe/transactions_api/db"
  );
  const data = await resp.json();
  const transactions = data.transactions;



  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Posty</h1>
      {transactions.map((transaction: any) => {
        return (
          <div key={transaction.balance} className=" mb-5">
            <Link href={`/posts/${transaction.balance}`}>
              <p className="mt-2">{transaction.description}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
