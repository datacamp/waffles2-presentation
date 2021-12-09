import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/0LandingPage';
import WhatToDoPage from './pages/1WhatToDoPage';
import HowToStartPage from './pages/2HowToStartPage';
import ButtonAndLinkPage from './pages/3ButtonAndLinkPage';
import TooltipPage from './pages/4TooltipPage';
import FormElementsPage from './pages/5FormElementsPage';
import HelpersPage from './pages/6HelpersPage';

function App() {
    return <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="what-to-do" element={<WhatToDoPage />} />
          <Route path="how-to-start" element={<HowToStartPage />} />
          <Route path="button-and-link" element={<ButtonAndLinkPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
          <Route path="form-elements" element={<FormElementsPage />} />
          <Route path="helpers" element={<HelpersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
}

export default App;
