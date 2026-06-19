'use client';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
  id: string;
  index: number;
  label: string;
}

function SortableItem({ id, index, label }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={[
        'flex items-center gap-4 bg-white border rounded-xl px-4 py-3.5',
        'select-none transition-shadow duration-150',
        isDragging
          ? 'border-electric-blue shadow-lg z-10 opacity-90'
          : 'border-border shadow-sm',
      ].join(' ')}
    >
      {/* Drag handle */}
      <span
        {...attributes}
        {...listeners}
        data-drag-handle
        className="flex-shrink-0 text-[#c4bfb8] hover:text-deep-blue transition-colors touch-none"
        aria-label="Drag to reorder"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="6" cy="5" r="1.5" fill="currentColor" />
          <circle cx="6" cy="9" r="1.5" fill="currentColor" />
          <circle cx="6" cy="13" r="1.5" fill="currentColor" />
          <circle cx="12" cy="5" r="1.5" fill="currentColor" />
          <circle cx="12" cy="9" r="1.5" fill="currentColor" />
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
        </svg>
      </span>

      {/* Position badge */}
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cream border border-border flex items-center justify-center font-sans text-xs font-semibold text-deep-blue">
        {index + 1}
      </span>

      <span className="font-sans text-base text-deep-blue leading-snug">{label}</span>
    </div>
  );
}

interface Props {
  items: string[];
  onChange: (newOrder: string[]) => void;
}

export default function Rank({ items, onChange }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor,   { activationConstraint: { delay: 100, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.indexOf(active.id as string);
      const newIndex = items.indexOf(over.id as string);
      onChange(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-2.5">
          {items.map((item, index) => (
            <SortableItem key={item} id={item} index={index} label={item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
