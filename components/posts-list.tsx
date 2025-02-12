import Link from "next/link";



const PostsList = async () => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/Krzysztofe/transactions_api/db"
  );
  const data = await resp.json();
  const transactions = data.transactions;

  return (
    <ul>
      {transactions.map((transaction: any) => {
        return (
          <li key={transaction.balance} className=" mb-5">
            <Link href={`/posts/${transaction.balance}`}>
              {transaction.description}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
