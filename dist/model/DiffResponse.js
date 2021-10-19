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
 * The DiffResponse model module.
 * @module model/DiffResponse
 * @version 3.0.0-alpha1
 */
var DiffResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DiffResponse</code>.
   * @alias module:model/DiffResponse
   */
  function DiffResponse() {
    _classCallCheck(this, DiffResponse);

    DiffResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DiffResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DiffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiffResponse} obj Optional instance to populate.
     * @return {module:model/DiffResponse} The populated <code>DiffResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiffResponse();

        if (data.hasOwnProperty('diff')) {
          obj['diff'] = _ApiClient["default"].convertToType(data['diff'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'Number');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DiffResponse;
}();
/**
 * The differences between two specified service versions. Returns the full config if the version configurations are identical.
 * @member {String} diff
 */


DiffResponse.prototype['diff'] = undefined;
/**
 * The format the diff is being returned in (`text`, `html` or `html_simple`).
 * @member {String} format
 */

DiffResponse.prototype['format'] = undefined;
/**
 * The version number being diffed from.
 * @member {Number} from
 */

DiffResponse.prototype['from'] = undefined;
/**
 * The version number being diffed to.
 * @member {Number} to
 */

DiffResponse.prototype['to'] = undefined;
var _default = DiffResponse;
exports["default"] = _default;