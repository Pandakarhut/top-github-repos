import { render, screen } from '@testing-library/react';
import { Repository } from './Repository';

test('render repository entry correctly', () => {
  const repository = {
    name: "Test repository",
    stargazers_count: 1500
  };

  render(<Repository rank="10" repository={repository} />);
  const rankElement = screen.getByText(/#10/);
  const nameElement = screen.getByText(/Test repository/);
  const starElement = screen.getByText(/⭐ 1500/);
});
