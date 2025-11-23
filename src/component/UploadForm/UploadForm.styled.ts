import styled from "styled-components";

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 6px;
`;

export const TypeForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FileForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FileInput = styled.input`
  cursor: pointer;
`;

export const UploadButton = styled.button<{ disabled: boolean }>`
  padding: 14px 20px;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#4a90e2")};
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.2s ease;
  margin-top: auto;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#3f7fcc")};
  }
`;

export const FileName = styled.span`
  margin-left: 10px;
  font-style: italic;
`;

export const Message = styled.p``;
