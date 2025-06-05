async function addData() {
  try {
    const Name = document.getElementById("name").value;
    const Batch = document.getElementById("batch").value;
    const Age = document.getElementById("age").value;
    const Score = document.getElementById("score").value;

    if (
      Name.length < 2 ||
      Batch.length < 1 ||
      Age < 1 ||
      Age > 30 ||
      Score < 0 ||
      Score > 100
    ) {
      alert("Please enter valid data!");
      document.getElementById("name").value = "";
      document.getElementById("batch").value = "";
      document.getElementById("age").value = "";
      document.getElementById("score").value = "";
      return;
    }

    let record = {
      name: Name,
      batch: Batch,
      age: Age,
      score: Score,
    };

    let res = await fetch(
      "https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      }
    );
    document.getElementById("name").value = "";
    document.getElementById("batch").value = "";
    document.getElementById("age").value = "";
    document.getElementById("score").value = "";

    alert("Data saved successfully!");
    fetchData();
  } catch (error) {
    alert(error.message);
  }
}

async function fetchData() {
  const table = document.getElementById("tableData");
  table.innerHTML = `  <tr>
                <th>Name</th>
                <th>Batch</th>
                <th>Age</th>
                <th>Score</th>
            </tr>`;

  const res = await fetch(
    "https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record.json"
  );
  const data = await res.json();
  // console.log(data)
  const students = Object.entries(data).map(([id, student]) => ({
    id,
    ...student,
  }));
  // console.log(students)
  students.forEach((ele) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${ele.name}</td>
                        <td>${ele.batch}</td>
                        <td>${ele.age}</td>
                        <td>${ele.score}</td>
                        `;
    const edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.onclick = () => Edit(ele.id);

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.onclick = () => deleteData(ele.id);

    tr.appendChild(edit);
    tr.appendChild(del);

    table.appendChild(tr);
  });
}

async function search() {
  try {
    let arr;
    const res = await fetch(
      "https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record.json"
    );
    const data = await res.json();
    arr = Object.entries(data).map(([id, record]) => ({ id, ...record }));
    // console.log(arr)

    let query = document.getElementById("query").value.toLowerCase();
    let table = document.getElementById("tableData");
    table.innerHTML = `<tr>
                                <th>Name</th>
                                <th>Batch</th>
                                <th>Age</th>
                                <th>Score</th>
                                        </tr>`;

    arr.filter((ele) => {
      if (ele.name.toLowerCase().includes(query)) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${ele.name}</td>
                        <td>${ele.batch}</td>
                        <td>${ele.age}</td>
                        <td>${ele.score}</td>
                        `;

        table.appendChild(tr);
      }
    });
  } catch (error) {
    let div = document.getElementById("table");
    table.innerHTML = "";
    table.innerText = error.message;
  }
}

async function age() {
  try {
    let arr;
    const res = await fetch(
      "https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record.json"
    );
    const data = await res.json();
    arr = Object.entries(data).map(([id, record]) => ({ id, ...record }));
    arr.sort((a, b) => a.age - b.age);

    let table = document.getElementById("tableData");
    table.innerHTML = `<tr>
                                <th>Name</th>
                                <th>Batch</th>
                                <th>Age</th>
                                <th>Score</th>
                                        </tr>`;

    arr.forEach((ele) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${ele.name}</td>
                        <td>${ele.batch}</td>
                        <td>${ele.age}</td>
                        <td>${ele.score}</td>
                        `;

      const edit = document.createElement("button");
      edit.innerText = "Edit";
      edit.onclick = () => Edit(ele.id);

      const del = document.createElement("button");
      del.innerText = "Delete";
      del.onclick = () => deleteData(ele.id);

      tr.appendChild(edit);
      tr.appendChild(del);

      table.appendChild(tr);
    });
  } catch (error) {
    let table = document.getElementById("#table");
    table.innerText = error.message;
  }
}

async function score() {
  try {
    let arr;
    const res = await fetch(
      "https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record.json"
    );
    const data = await res.json();
    arr = Object.entries(data).map(([id, record]) => ({ id, ...record }));
    arr.sort((a, b) => b.score - a.score);

    let table = document.getElementById("tableData");
    table.innerHTML = `<tr>
                                <th>Name</th>
                                <th>Batch</th>
                                <th>Age</th>
                                <th>Score</th>
                                        </tr>`;

    arr.forEach((ele) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${ele.name}</td>
                        <td>${ele.batch}</td>
                        <td>${ele.age}</td>
                        <td>${ele.score}</td>
                        `;

      const edit = document.createElement("button");
      edit.innerText = "Edit";
      edit.onclick = () => Edit(ele.id);

      const del = document.createElement("button");
      del.innerText = "Delete";
      del.onclick = () => deleteData(ele.id);

      tr.appendChild(edit);
      tr.appendChild(del);

      table.appendChild(tr);
    });
  } catch (error) {
    let table = document.getElementById("#table");
    table.innerText = error.message;
  }
}

async function Edit(id) {
  try {
    let arr;
    const res = await fetch(
      `https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record/${id}.json`
    );
    const data = await res.json();
    // console.log(data)
    document.getElementById("name").value = data.name;
    document.getElementById("batch").value = data.batch;
    document.getElementById("age").value = data.age;
    document.getElementById("score").value = data.score;

    const submitBtn = document.getElementById("submit");
    submitBtn.innerText = "Update";
    submitBtn.onclick = () => updateData(id);
  } catch (error) {
    alert("Unable to edit data!");
  }
}

async function updateData(id) {
  try {
    const Name = document.getElementById("name").value;
    const Batch = document.getElementById("batch").value;
    const Age = document.getElementById("age").value;
    const Score = document.getElementById("score").value;

    const update = {
      name: Name,
      batch: Batch,
      age: Age,
      score: Score,
    };

    const res = await fetch(
      `https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record/${id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      }
    );
    document.getElementById("name").value = "";
    document.getElementById("batch").value = "";
    document.getElementById("age").value = "";
    document.getElementById("score").value = "";
    const submitBtn = document.getElementById("submit");
    submitBtn.innerText = "Submit";

    alert("Record updated!");
    fetchData();
  } catch (error) {
    alert("Unable to update data!");
  }
}

async function deleteData(id) {
  try {
    const res = await fetch(
      `https://studentrecordmanager-default-rtdb.asia-southeast1.firebasedatabase.app/record/${id}.json`,
      {
        method: "DELETE",
      }
    );
    alert("Record deleted!");
    fetchData();
  } catch (error) {
    alert("Unable to delete data!");
  }
}
