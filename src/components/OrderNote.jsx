import React from 'react';

export default function OrderNote({ note, onChange }) {
  return (
    <>
        <h4>Order Note</h4>
        <textarea
            value={order.note}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Add any special instructions for your order here..."
            style={{ width: '100%', height: '100px', padding: '10px', fontSize: '16px' }}
        />
        <hr style={{ borderTop: '1px', marginBottom: '20px' }} />
    </>
  );
}