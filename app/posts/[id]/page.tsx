const SinglePost = async ({ params }: { params: { id: string } }) => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/Krzysztofe/transactions_api/db"
  );
  const data = await resp.json();
  const transactions = data.transactions;
  const transaction = transactions.find((transaction: any) => {
    return transaction.balance === parseFloat(params.id);
  });

  return (
    <main>
      <div className="text-center">Post</div>
      <div className=" mb-5">
        <p className="mt-2">Opis: {transaction.description}</p>
        <p className="mt-2">Balans: {transaction.balance}</p>
      </div>
    </main>
  );
};

export default SinglePost;
