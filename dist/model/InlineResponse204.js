"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceAuthorizationData = _interopRequireDefault(require("./ServiceAuthorizationData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse204 model module.
 * @module model/InlineResponse204
 * @version 3.0.0-alpha1
 */
var InlineResponse204 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse204</code>.
   * @alias module:model/InlineResponse204
   */
  function InlineResponse204() {
    _classCallCheck(this, InlineResponse204);

    InlineResponse204.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse204, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse204</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse204} obj Optional instance to populate.
     * @return {module:model/InlineResponse204} The populated <code>InlineResponse204</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse204();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ServiceAuthorizationData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse204;
}();
/**
 * @member {Array.<module:model/ServiceAuthorizationData>} data
 */


InlineResponse204.prototype['data'] = undefined;
var _default = InlineResponse204;
exports["default"] = _default;