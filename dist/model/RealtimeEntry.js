"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RealtimeMeasurements = _interopRequireDefault(require("./RealtimeMeasurements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RealtimeEntry model module.
 * @module model/RealtimeEntry
 * @version 3.0.0-alpha1
 */
var RealtimeEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RealtimeEntry</code>.
   * A list of records, each representing one second of time. The &#x60;Data&#x60; property provides access to [measurement data](#measurements-data-model) for that time period, grouped in various ways.
   * @alias module:model/RealtimeEntry
   */
  function RealtimeEntry() {
    _classCallCheck(this, RealtimeEntry);

    RealtimeEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RealtimeEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RealtimeEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RealtimeEntry} obj Optional instance to populate.
     * @return {module:model/RealtimeEntry} The populated <code>RealtimeEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RealtimeEntry();

        if (data.hasOwnProperty('aggregated')) {
          obj['aggregated'] = _RealtimeMeasurements["default"].constructFromObject(data['aggregated']);
        }

        if (data.hasOwnProperty('datacenter')) {
          obj['datacenter'] = _ApiClient["default"].convertToType(data['datacenter'], {
            'String': _RealtimeMeasurements["default"]
          });
        }

        if (data.hasOwnProperty('recorded')) {
          obj['recorded'] = _ApiClient["default"].convertToType(data['recorded'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RealtimeEntry;
}();
/**
 * @member {module:model/RealtimeMeasurements} aggregated
 */


RealtimeEntry.prototype['aggregated'] = undefined;
/**
 * Groups [measurements](#measurements-data-model) by POP. See the [POPs API](/reference/api/utils/pops/) for details of POP identifiers.
 * @member {Object.<String, module:model/RealtimeMeasurements>} datacenter
 */

RealtimeEntry.prototype['datacenter'] = undefined;
/**
 * Unix epoch timestamp.
 * @member {Number} recorded
 */

RealtimeEntry.prototype['recorded'] = undefined;
var _default = RealtimeEntry;
exports["default"] = _default;