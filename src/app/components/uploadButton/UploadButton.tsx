import { FileContentType, UploadButtonProps } from "./uploadButton.types";
import React, { useState, ChangeEvent, FormEvent } from "react";

// interface CsvData {
//   name: string;
//   city: string;
//   country: string;
//   favorite_sport: string;
//   prevState: null
// }

export default function UploadButton(props: UploadButtonProps) {
  // HookForm
  const [fileContent, setFileContent] = useState<FileContentType>("");
  const { children } = props;

  // TODO: Usar func abaixo para verificar em handleChange se foi enviado apenas o header e/ou se possui as colunas esperadas

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;
    console.log(target.files[0]);

    const fileReader = new FileReader();
    fileReader.onload = function(event: Event) {
      const text = fileReader.result;
      setFileContent(text);
    }

    fileReader.readAsText(target.files[0]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fileContent) {
      // const formattedFileContent = formatCsvString(fileContent)
      // if (!formattedFileContent) {
      //   return;
      // }
      // const csvHeader = formattedFileContent?.shift()
      const formData = new FormData();
      if (typeof fileContent === 'string') {
          formData.append('file', fileContent);
      } else {
        const blob = new Blob([fileContent]);
        formData.append('file', blob);
      }

      try {
        console.log('formData: ', formData);
        
        const response = await fetch('/api/files', {
          method: 'POST',
          body: formData,
        });

        // Verifique o status da resposta e trate-a conforme necessário
        if (response.ok) {
          console.log('Arquivo enviado com sucesso!');
        } else {
          console.log('Erro ao enviar o arquivo.');
        }
      } catch (error) {
        console.error('Ocorreu um erro na requisição: ', error);
      }
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{children}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="csvFileInput"
          accept=".csv"
          onChange={handleChange}
        />
        <button type="submit">IMPORT CSV</button>
      </form>
    </div>
  );
}