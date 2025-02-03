"use client";

import type React from "react";
import { useEffect, useRef } from "react";

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gradients = [
      ctx.createLinearGradient(0, 0, canvas.width, canvas.height),
      ctx.createLinearGradient(canvas.width, 0, 0, canvas.height),
      ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      ),
    ];

    gradients[0].addColorStop(0, "rgba(59, 130, 246, 0.1)");
    gradients[0].addColorStop(0.5, "rgba(99, 102, 241, 0.1)");
    gradients[0].addColorStop(1, "rgba(14, 165, 233, 0.1)");

    gradients[1].addColorStop(0, "rgba(14, 165, 233, 0.1)");
    gradients[1].addColorStop(0.5, "rgba(99, 102, 241, 0.1)");
    gradients[1].addColorStop(1, "rgba(59, 130, 246, 0.1)");

    gradients[2].addColorStop(0, "rgba(59, 130, 246, 0.1)");
    gradients[2].addColorStop(0.5, "rgba(99, 102, 241, 0.1)");
    gradients[2].addColorStop(1, "rgba(14, 165, 233, 0.1)");

    const shapes: {
      x: number;
      y: number;
      size: number;
      speed: number;
      gradient: CanvasGradient;
      rotation: number;
      rotationSpeed: number;
      curveControl: number;
    }[] = [];

    for (let i = 0; i < 20; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 150 + 50,
        speed: Math.random() * 0.3 + 0.1,
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        curveControl: Math.random() * 0.5 + 0.5,
      });
    }

    const drawShape = (
      x: number,
      y: number,
      size: number,
      gradient: CanvasGradient,
      rotation: number,
      curveControl: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.bezierCurveTo(
        size * curveControl,
        -size / 2,
        size * curveControl,
        size / 2,
        0,
        size / 2
      );
      ctx.bezierCurveTo(
        -size * curveControl,
        size / 2,
        -size * curveControl,
        -size / 2,
        0,
        -size / 2
      );
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.y += shape.speed;
        shape.rotation += shape.rotationSpeed;
        shape.curveControl =
          Math.sin(Date.now() * 0.001 + shapes.indexOf(shape)) * 0.2 + 0.5;
        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size;
          shape.x = Math.random() * canvas.width;
        }
        drawShape(
          shape.x,
          shape.y,
          shape.size,
          shape.gradient,
          shape.rotation,
          shape.curveControl
        );
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default DynamicBackground;
