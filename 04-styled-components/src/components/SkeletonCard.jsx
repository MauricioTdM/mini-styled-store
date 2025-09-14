import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  50% {
    opacity: 0.5;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: ${({ theme }) => theme.spacing.md};
`;

const SkeletonBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  animation: ${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const SkeletonImage = styled(SkeletonBlock)`
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SkeletonLine = styled(SkeletonBlock)`
  height: 16px;
  margin-bottom: 8px;
`;

const SkeletonButton = styled(SkeletonBlock)`
  height: 42px;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

export const SkeletonCard = () => {
    return (
        <SkeletonWrapper>
            <SkeletonImage />
            <div>
                <SkeletonLine style={{ width: '90%' }} />
                <SkeletonLine style={{ width: '70%' }} />
                <SkeletonLine style={{ width: '50%', marginTop: '16px' }} />
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <SkeletonLine style={{ height: '42px', marginBottom: 0 }} />
                </div>
            </div>
        </SkeletonWrapper>
    );
};