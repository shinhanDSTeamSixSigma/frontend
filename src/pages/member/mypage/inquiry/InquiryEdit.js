import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BoardRegist from "../../../../components/board/BoardRegist";
const StyledContainer = styled.div`
    background-color:white;
    border-radius:0.6rem;
    margin:1.5rem;
`;
const InquiryEdit = () => {
    const { boardNo, memberNo, farmNo } = useParams();
    const [inquiryDetail, setInquiryDetail] = useState(null);

    useEffect(() => {
        const fetchInquiryDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/board/detail/${boardNo}`);
                setInquiryDetail(response.data);
            } catch (error) {
                console.error("Error fetching inquiry detail:", error);
            }
        };
        fetchInquiryDetail();
    }, [boardNo]);

    return (
        <StyledContainer>
            {inquiryDetail && (
                <BoardRegist
                    title={inquiryDetail.title}
                    content={inquiryDetail.boardContent}
                    boardNo={boardNo}
                    isEdit={true}
                    memberNo={memberNo}
                    farmNo={farmNo}
                />
            )}
        </StyledContainer>
    );
};
export default InquiryEdit;