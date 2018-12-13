const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const Event = require('../models/Event');

describe('Event Model', () => {
  it('should create a new event', (done) => {
    const EventMock = sinon.mock(new Event({ email: 'test@gmail.com', password: 'root' }));
    const event = EventMock.object;

    EventMock
      .expects('save')
      .yields(null);

    event.save((err) => {
      EventMock.verify();
      EventMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

  it('should return error if event is not created', (done) => {
    const EventMock = sinon.mock(new Event({ email: 'test@gmail.com', password: 'root' }));
    const event = EventMock.object;
    const expectedError = {
      name: 'ValidationError'
    };

    EventMock
      .expects('save')
      .yields(expectedError);

    event.save((err, result) => {
      EventMock.verify();
      EventMock.restore();
      expect(err.name).to.equal('ValidationError');
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should not create a event with the unique email', (done) => {
    const EventMock = sinon.mock(Event({ email: 'test@gmail.com', password: 'root' }));
    const event = EventMock.object;
    const expectedError = {
      name: 'MongoError',
      code: 11000
    };

    EventMock
      .expects('save')
      .yields(expectedError);

    event.save((err, result) => {
      EventMock.verify();
      EventMock.restore();
      expect(err.name).to.equal('MongoError');
      expect(err.code).to.equal(11000);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should find event by email', (done) => {
    const eventMock = sinon.mock(Event);
    const expectedEvent = {
      _id: '5700a128bd97c1341d8fb365',
      email: 'test@gmail.com'
    };

    eventMock
      .expects('findOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedEvent);

    Event.findOne({ email: 'test@gmail.com' }, (err, result) => {
      eventMock.verify();
      eventMock.restore();
      expect(result.email).to.equal('test@gmail.com');
      done();
    });
  });

  it('should remove event by email', (done) => {
    const eventMock = sinon.mock(Event);
    const expectedResult = {
      nRemoved: 1
    };

    eventMock
      .expects('remove')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedResult);

    Event.remove({ email: 'test@gmail.com' }, (err, result) => {
      eventMock.verify();
      eventMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done();
    });
  });
});
