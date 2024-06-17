import Hyperlink from '@/components/common/button/hyperlink';
import Button from '@/components/common/button/button';
import useModal from '@/hooks/use-modal';
import ShareModal from '../share-modal/share-modal';
import MyFamilyApi from '@/api/my/groups';
import { useState } from 'react';

export default function PetsLinkList() {
  const myFamilyApi = new MyFamilyApi();
  const [Modal, handleModal] = useModal();
  const [code, setCode] = useState('');
  const handleGetCode = async () => {
    try {
      const response = await myFamilyApi.myFamilyCode();
      setCode(response.data.code);
    } catch {
      console.log('에러');
    }
  };
  const openModal = () => {
    handleModal(true);
    handleGetCode();
  };
  const closeModal = () => {
    handleModal(false);
  };
  return (
    <>
      <li>
        <Hyperlink className="secondary" href="/start-pet" round>
          반려동물 추가하기
        </Hyperlink>
      </li>
      <li>
        <Button type="button" className="primary" round onClick={openModal}>
          가족 초대하기
        </Button>
      </li>
      <li>
        <Hyperlink className="tertiary" href="/family" round>
          다음에 초대하기
        </Hyperlink>
      </li>
      <Modal>
        <ShareModal closeModal={closeModal} code={code} />
      </Modal>
    </>
  );
}
