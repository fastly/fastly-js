"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalMeta model module.
 * @module model/HistoricalMeta
 * @version 3.0.0-alpha1
 */
var HistoricalMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalMeta</code>.
   * Meta information about the scope of the query in a human readable format.
   * @alias module:model/HistoricalMeta
   */
  function HistoricalMeta() {
    _classCallCheck(this, HistoricalMeta);

    HistoricalMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalMeta} obj Optional instance to populate.
     * @return {module:model/HistoricalMeta} The populated <code>HistoricalMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalMeta();

        if (data.hasOwnProperty('by')) {
          obj['by'] = _ApiClient["default"].convertToType(data['by'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HistoricalMeta;
}();
/**
 * @member {String} by
 */


HistoricalMeta.prototype['by'] = undefined;
/**
 * @member {String} from
 */

HistoricalMeta.prototype['from'] = undefined;
/**
 * @member {String} region
 */

HistoricalMeta.prototype['region'] = undefined;
/**
 * @member {String} to
 */

HistoricalMeta.prototype['to'] = undefined;
var _default = HistoricalMeta;
exports["default"] = _default;