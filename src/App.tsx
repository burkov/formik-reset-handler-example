import { Form, Formik, useField } from "formik";

const MyInput = ({ name }: { name: string }) => {
  const [props] = useField(name);
  return <input {...props} />;
};

function App() {
  return (
    <div style={{ marginTop: "96px", marginLeft: "240px" }}>
      <Formik initialValues={{ username: "" }} onSubmit={console.log}>
        {({ resetForm }) => {
          return (
            <Form>
              <MyInput name="username" />
              <button onClick={() => resetForm()}>reset</button>
              <button type="submit">submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
