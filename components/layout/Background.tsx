
const Background = () => {
    const backgrounds = {
        neuralOverlay: "/public/images/neural-overlay.png",
        quantumGrid: "/public/images/quantum-grid.png",
    };
    
    return (
        <>
            <div className="fixed inset-0 z-[-1] opacity-5" style={{ backgroundImage: `url(${backgrounds.neuralOverlay})` }} />
            <div className="fixed inset-0 z-[-1] opacity-10" style={{ backgroundImage: `url(${backgrounds.quantumGrid})` }} />
        </>
    );
};

export default Background;
